// DOM Elements
const rosterList = document.getElementById('roster-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const genderFilter = document.getElementById('gender-filter');
const locationFilter = document.getElementById('location-filter');
const contactedFilter = document.getElementById('contacted-filter');
const availabilityFilter = document.getElementById('availability-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const resetFiltersBtn = document.getElementById('reset-filters');

// Remove the rosterData array
// let rosterData = [ ... ]; // Remove this array

// Load saved data from Firebase
async function loadSavedData() {
    try {
        console.log('Loading saved data...');
        const snapshot = await db.collection('roster').get();
        console.log('Firestore snapshot:', snapshot);
        
        if (snapshot.empty) {
            console.log('No data found in Firestore');
            return [];
        }
        
        const members = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log('Document data:', doc.id, data);
            members.push({ ...data, id: doc.id });
        });
        console.log('Data loaded successfully:', members.length, 'members');
        return members;
    } catch (error) {
        console.error("Error loading data:", error);
        console.error("Error details:", {
            code: error.code,
            message: error.message,
            stack: error.stack
        });
        return [];
    }
}

// Initialize default data in Firebase
async function initializeDefaultData() {
    try {
        console.log('Initializing default data...');
        const batch = db.batch();
        const timestamp = Date.now();
        
        const defaultMembers = [
            { name: "Abdul Qayyoom Sait M R", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
            { name: "Abey Velangadan", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
            // ... rest of the default members ...
        ];
        
        defaultMembers.forEach((member, index) => {
            const uniqueId = `member_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;
            const docRef = db.collection('roster').doc(uniqueId);
            const memberWithId = { ...member, id: uniqueId };
            console.log('Creating document:', uniqueId, memberWithId);
            batch.set(docRef, memberWithId);
        });
        
        await batch.commit();
        console.log('Default data initialized successfully');
    } catch (error) {
        console.error("Error initializing data:", error);
        console.error("Error details:", {
            code: error.code,
            message: error.message,
            stack: error.stack
        });
    }
}

// Display roster items
async function displayRoster() {
    try {
        console.log('Displaying roster items...');
        const members = await loadSavedData();
        console.log('Members to display:', members);
        
        rosterList.innerHTML = '';
        if (!members || members.length === 0) {
            console.log('No members to display');
            return;
        }
        
        members.forEach(member => {
            if (!member.id) {
                console.error('Member missing ID:', member);
                return;
            }
            const div = document.createElement('div');
            div.className = 'roster-item';
            div.textContent = member.name;
            div.addEventListener('click', () => {
                console.log('Opening edit modal for member:', member.id, member.name);
                openEditModal(member.id);
            });
            rosterList.appendChild(div);
        });
    } catch (error) {
        console.error('Error displaying roster:', error);
    }
}

// Search functionality
async function searchRoster(query) {
    query = query.toLowerCase();
    const members = await loadSavedData();
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(query)
    );
    displayFilteredRoster(filteredMembers);
}

// Display filtered roster items
function displayFilteredRoster(members) {
    console.log('Displaying filtered roster items:', members);
    rosterList.innerHTML = '';
    
    members.forEach(member => {
        if (!member.id) {
            console.error('Member missing ID:', member);
            return;
        }
        const div = document.createElement('div');
        div.className = 'roster-item';
        div.textContent = member.name;
        div.addEventListener('click', () => {
            console.log('Opening edit modal for member:', member.id, member.name);
            openEditModal(member.id);
        });
        rosterList.appendChild(div);
    });
}

// Apply all filters
async function applyFilters() {
    const genderValue = genderFilter.value;
    const locationValue = locationFilter.value;
    const contactedValue = contactedFilter.value;
    const availabilityValue = availabilityFilter.value;
    
    const members = await loadSavedData();
    let result = [...members];
    
    if (genderValue) {
        result = result.filter(member => member.gender === genderValue);
    }
    
    if (locationValue) {
        result = result.filter(member => member.location === locationValue);
    }
    
    if (contactedValue) {
        result = result.filter(member => member.contacted === contactedValue);
    }
    
    if (availabilityValue) {
        result = result.filter(member => member.availability === availabilityValue);
    }
    
    displayFilteredRoster(result);
}

// Reset all filters
async function resetFilters() {
    genderFilter.value = '';
    locationFilter.value = '';
    contactedFilter.value = '';
    availabilityFilter.value = '';
    
    await displayRoster();
}

// Sort functionality
function sortRoster(direction, members) {
    const sortedMembers = [...members].sort((a, b) => {
        if (direction === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    displayFilteredRoster(sortedMembers);
}

// Initialize the roster
async function initializeRoster() {
    try {
        console.log('Initializing roster...');
        await displayRoster();
        console.log('Roster initialization complete');
    } catch (error) {
        console.error('Error initializing roster:', error);
    }
}

// Event Listeners
if (searchInput) {
    searchInput.addEventListener('input', () => {
        searchRoster(searchInput.value);
    });
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchRoster(searchInput.value);
    });
}

if (sortButtons.length > 0) {
    sortButtons.forEach(button => {
        button.addEventListener('click', async () => {
            sortButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSort = button.dataset.sort;
            const members = await loadSavedData();
            sortRoster(currentSort, members);
        });
    });
}

// Filter event listeners
if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
}

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetFilters);
}

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initDarkMode();
    initializeRoster();
});

// Open edit modal for a member
async function openEditModal(memberId) {
    try {
        console.log('Opening edit modal for member:', memberId);
        const memberDoc = await db.collection('roster').doc(memberId).get();
        
        if (!memberDoc.exists) {
            console.error('Member not found:', memberId);
            return;
        }

        const member = memberDoc.data();
        console.log('Member data:', member);

        // Create modal HTML
        const modalHTML = `
            <div class="modal" id="edit-modal">
                <div class="modal-content">
                    <h2>Edit Member Details</h2>
                    <form id="edit-form">
                        <div class="form-group">
                            <label for="edit-name">Name:</label>
                            <input type="text" id="edit-name" value="${member.name || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="edit-gender">Gender:</label>
                            <select id="edit-gender">
                                <option value="">Select Gender</option>
                                <option value="Male" ${member.gender === 'Male' ? 'selected' : ''}>Male</option>
                                <option value="Female" ${member.gender === 'Female' ? 'selected' : ''}>Female</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="edit-location">Location:</label>
                            <input type="text" id="edit-location" value="${member.location || ''}">
                        </div>
                        <div class="form-group">
                            <label for="edit-contacted">Contacted:</label>
                            <select id="edit-contacted">
                                <option value="">Select Status</option>
                                <option value="Yes" ${member.contacted === 'Yes' ? 'selected' : ''}>Yes</option>
                                <option value="No" ${member.contacted === 'No' ? 'selected' : ''}>No</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="edit-contactedBy">Contacted By:</label>
                            <input type="text" id="edit-contactedBy" value="${member.contactedBy || ''}">
                        </div>
                        <div class="form-group">
                            <label for="edit-phone">Phone:</label>
                            <input type="text" id="edit-phone" value="${member.phone || ''}">
                        </div>
                        <div class="form-group">
                            <label for="edit-availability">Availability:</label>
                            <select id="edit-availability">
                                <option value="">Select Availability</option>
                                <option value="Available" ${member.availability === 'Available' ? 'selected' : ''}>Available</option>
                                <option value="Not Available" ${member.availability === 'Not Available' ? 'selected' : ''}>Not Available</option>
                            </select>
                        </div>
                        <div class="modal-buttons">
                            <button type="submit" class="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-secondary" onclick="closeEditModal()">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Add modal to the page
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add form submit handler
        const form = document.getElementById('edit-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await saveMemberData(memberId);
        });

        // Show modal
        const modal = document.getElementById('edit-modal');
        modal.style.display = 'block';
    } catch (error) {
        console.error('Error opening edit modal:', error);
    }
}

// Close edit modal
function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) {
        modal.remove();
    }
}

// Save member data
async function saveMemberData(memberId) {
    try {
        const memberData = {
            name: document.getElementById('edit-name').value,
            gender: document.getElementById('edit-gender').value,
            location: document.getElementById('edit-location').value,
            contacted: document.getElementById('edit-contacted').value,
            contactedBy: document.getElementById('edit-contactedBy').value,
            phone: document.getElementById('edit-phone').value,
            availability: document.getElementById('edit-availability').value
        };

        await db.collection('roster').doc(memberId).update(memberData);
        console.log('Member data updated successfully:', memberId);
        
        // Refresh the roster display
        await displayRoster();
        
        // Close the modal
        closeEditModal();
    } catch (error) {
        console.error('Error saving member data:', error);
    }
} 