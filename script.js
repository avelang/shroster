// Class roster data with additional details
const rosterData = [
    { name: "Abdul Qayyoom Sait M R", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Abey Velangadan", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Abhilash Augustine", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Abilash K", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Alfred Thomas", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Aneesh Michael", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Anju Babu", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Arun A Abraham", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Arun Sidhan", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Asha Kurian", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Ashitha Mathew", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Aswathy Maria Joseph", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Bastin Tijo Thomas", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Binu Jose C J", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Boby K A", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Brilsa Raj", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Ceethu Antony Chernoth", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Cija Augustus", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Cijo George", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Deepak Menon", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Deepak S", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Deepthy Jose", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Dileesh Jostin", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Elizabeth Kuriala", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Geetha Lekshmi G", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "George Regin K J", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "George Thomas", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "George Thomas M", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Girish S", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jagadeesh Kumar", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jayadevan A", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jerry J Vettamvely", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jimmy Vibu James", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jins Thomas", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jisha K", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jiss M Kumar", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "John E George", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jomy Joseph", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Jortin Varghese", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Kavitha Mohanraj", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Laly T K", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Liza Jolly", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Martin Varghese", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Minu Jose", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Mohamed Fazal K A", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Neetha Joseph T", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Neetha Varghese K", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Nobin Thomas", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Prasanth S", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Ratheesh K R", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Remya Devasia", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Roshni Pius", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Rosmy Jose Valavi", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sajin S", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sameer Sait A", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sandeep K Vasudevan", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sangeetha P Prabhu", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sanil Kumar M V", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sarath S P", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Satheesh M T", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Shani M S", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sharath Chandran B", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sherry Philip", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Shibu Varghese", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Shinu B Firoz", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Shone Jacob", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Shymon S P", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sonnia Baby", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Soumya Sunny", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sreekumar M", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sreenath M", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Srikkanth S Bose", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Srinivas E Kamath", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Suja T D", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sujith Jacob", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sumithra P", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sunil Samuel", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Sunitha E V", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Syam Kumar P", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Teena Mary Mohan", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Thomas George", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Toby Joseph Pulickal", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Tony Benny", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" },
    { name: "Vibin M D", gender: "", location: "", contacted: "", contactedBy: "", phone: "", availability: "" }
];

// DOM Elements
const rosterList = document.getElementById('roster-list');
const searchInput = document.getElementById('roster-search-input');
const searchBtn = document.getElementById('search-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
const applyFiltersBtn = document.getElementById('apply-filters-btn');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

// Filter elements
const genderFilter = document.getElementById('gender-filter');
const locationFilter = document.getElementById('location-filter');
const contactedFilter = document.getElementById('contacted-filter');
const availabilityFilter = document.getElementById('availability-filter');

let currentSort = 'asc';
let filteredRoster = [...rosterData];

// Initialize the roster
function initializeRoster() {
    displayRoster(rosterData);
}

// Display roster items
function displayRoster(items) {
    rosterList.innerHTML = '';
    items.forEach((member, index) => {
        const div = document.createElement('div');
        div.className = 'roster-item';
        div.textContent = member.name;
        div.dataset.index = index;
        div.addEventListener('click', () => openEditModal(index));
        rosterList.appendChild(div);
    });
}

// Search functionality
function searchRoster(query) {
    query = query.toLowerCase();
    filteredRoster = rosterData.filter(member => 
        member.name.toLowerCase().includes(query)
    );
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const genderValue = genderFilter.value;
    const locationValue = locationFilter.value;
    const contactedValue = contactedFilter.value;
    const availabilityValue = availabilityFilter.value;
    
    // Start with the current filtered roster (from search)
    let result = [...filteredRoster];
    
    // Apply each filter if it has a value
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
    
    // Sort the filtered results
    sortRoster(currentSort, result);
}

// Reset all filters
function resetFilters() {
    genderFilter.value = '';
    locationFilter.value = '';
    contactedFilter.value = '';
    availabilityFilter.value = '';
    
    // Reset to original data
    filteredRoster = [...rosterData];
    sortRoster(currentSort);
}

// Sort functionality
function sortRoster(direction, dataToSort = filteredRoster) {
    filteredRoster = dataToSort.sort((a, b) => {
        if (direction === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    displayRoster(filteredRoster);
}

// Create and open edit modal
function openEditModal(index) {
    const member = rosterData[index];
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'edit-modal';
    
    // Create modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Edit Member Details</h2>
            <h3>${member.name}</h3>
            <form id="edit-form">
                <div class="form-group">
                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender">
                        <option value="" ${member.gender === "" ? "selected" : ""}>Select Gender</option>
                        <option value="Male" ${member.gender === "Male" ? "selected" : ""}>Male</option>
                        <option value="Female" ${member.gender === "Female" ? "selected" : ""}>Female</option>
                        <option value="Other" ${member.gender === "Other" ? "selected" : ""}>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="location">Current Location:</label>
                    <select id="location" name="location">
                        <option value="" ${member.location === "" ? "selected" : ""}>Select Location</option>
                        <option value="Overseas" ${member.location === "Overseas" ? "selected" : ""}>Overseas</option>
                        <option value="India" ${member.location === "India" ? "selected" : ""}>India</option>
                        <option value="Kerala" ${member.location === "Kerala" ? "selected" : ""}>Kerala</option>
                        <option value="Kochi" ${member.location === "Kochi" ? "selected" : ""}>Kochi</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contacted">Contacted:</label>
                    <select id="contacted" name="contacted">
                        <option value="" ${member.contacted === "" ? "selected" : ""}>Select</option>
                        <option value="Yes" ${member.contacted === "Yes" ? "selected" : ""}>Yes</option>
                        <option value="No" ${member.contacted === "No" ? "selected" : ""}>No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contactedBy">Contacted By:</label>
                    <input type="text" id="contactedBy" name="contactedBy" value="${member.contactedBy}">
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value="${member.phone}">
                </div>
                <div class="form-group">
                    <label for="availability">Availability:</label>
                    <select id="availability" name="availability">
                        <option value="" ${member.availability === "" ? "selected" : ""}>Select</option>
                        <option value="Yes" ${member.availability === "Yes" ? "selected" : ""}>Yes</option>
                        <option value="No" ${member.availability === "No" ? "selected" : ""}>No</option>
                        <option value="Maybe" ${member.availability === "Maybe" ? "selected" : ""}>Maybe</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="submit" class="save-btn">Save</button>
                    <button type="button" class="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to the document
    document.body.appendChild(modal);
    
    // Get form elements
    const form = document.getElementById('edit-form');
    const closeBtn = modal.querySelector('.close-btn');
    const cancelBtn = modal.querySelector('.cancel-btn');
    
    // Close modal event
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Cancel button event
    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Form submit event
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Update member data
        member.gender = document.getElementById('gender').value;
        member.location = document.getElementById('location').value;
        member.contacted = document.getElementById('contacted').value;
        member.contactedBy = document.getElementById('contactedBy').value;
        member.phone = document.getElementById('phone').value;
        member.availability = document.getElementById('availability').value;
        
        // Close modal
        document.body.removeChild(modal);
        
        // Refresh display with current filters
        applyFilters();
    });
}

// Event Listeners
searchInput.addEventListener('input', () => {
    searchRoster(searchInput.value);
});

searchBtn.addEventListener('click', () => {
    searchRoster(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchRoster(searchInput.value);
    }
});

sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        sortButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentSort = button.dataset.sort;
        sortRoster(currentSort);
    });
});

// Filter event listeners
applyFiltersBtn.addEventListener('click', applyFilters);

resetFiltersBtn.addEventListener('click', resetFilters);

// Initialize the roster when the page loads
document.addEventListener('DOMContentLoaded', initializeRoster); 