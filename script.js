// Itinerary data for Tasmania trip
const itineraryData = [
    {
        date: "Thursday, 18th July",
        location: "Hobart",
        description: "Arrival Day - Fly to Hobart",
        activities: [
            { id: 1, text: "Book flight tickets", completed: false, notes: "" },
            { id: 2, text: "Pick up car rental at Hobart Airport", completed: false, notes: "" },
            { id: 3, text: "Check-in at the hotel", completed: false, notes: "" },
            { id: 4, text: "Visit Mt Wellington (approx. 30 min drive)", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "plane",
            text: "Flight arrival - collect rental car"
        }
    },
    {
        date: "Friday, 19th July",
        location: "Bicheno",
        description: "Travel to Bicheno",
        activities: [
            { id: 5, text: "Travel to Bicheno (approx. 2 hrs 20 mins drive)", completed: false, notes: "" },
            { id: 6, text: "Stop at Coles Bay to explore Freycinet National Park", completed: false, notes: "" },
            { id: 7, text: "Evening: Penguin walk on the beach", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Hobart → Bicheno (2hrs 20mins)"
        }
    },
    {
        date: "Saturday, 20th July - Sunday, 21st July",
        location: "Launceston",
        description: "Weekend in Launceston",
        activities: [
            { id: 8, text: "Travel to Launceston (approx. 2 hrs drive or 3 hrs via St Helens)", completed: false, notes: "" },
            { id: 9, text: "Stop at Bay of Fires near St Helens", completed: false, notes: "" },
            { id: 10, text: "Visit Ben Lomond National Park (30 mins outside Launceston)", completed: false, notes: "" },
            { id: 11, text: "Zoo Experience in Launceston", completed: false, notes: "" },
            { id: 12, text: "Penny Royal Adventures", completed: false, notes: "" },
            { id: 13, text: "Check accommodation at Leisure Inn", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Bicheno → Launceston (2-3hrs) via St Helens"
        }
    },
    {
        date: "Monday, 22nd July",
        location: "Cradle Mountain",
        description: "Journey to Cradle Mountain",
        activities: [
            { id: 14, text: "Travel to Cradle Mountain (approx. 3 hrs 45 mins drive)", completed: false, notes: "" },
            { id: 15, text: "Visit Dove Lake and enjoy scenic walks", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Launceston → Cradle Mountain (3hrs 45mins)"
        }
    },
    {
        date: "Tuesday, 23rd July",
        location: "Queenstown",
        description: "Explore Queenstown",
        activities: [
            { id: 16, text: "Travel to Queenstown (approx. 1 hr 45 mins drive)", completed: false, notes: "" },
            { id: 17, text: "Stop at Iron Blow Lookout for views", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Cradle Mountain → Queenstown (1hr 45mins)"
        }
    },
    {
        date: "Wednesday, 24th July",
        location: "Lake St. Clair",
        description: "Lake St. Clair Adventure",
        activities: [
            { id: 18, text: "Travel to Lake St. Clair (approx. 1 hr 30 mins drive)", completed: false, notes: "" },
            { id: 19, text: "Rail Experience (3 hrs, starting at 10:30 AM)", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Queenstown → Lake St. Clair (1hr 30mins)"
        }
    },
    {
        date: "Thursday, 25th July - Friday, 26th July",
        location: "Hobart Return",
        description: "Return to Hobart",
        activities: [
            { id: 20, text: "Return to Hobart (approx. 2 hrs 20 mins drive)", completed: false, notes: "" },
            { id: 21, text: "Visit Mt Wellington", completed: false, notes: "" },
            { id: 22, text: "Explore MONA (Museum of Old and New Art)", completed: false, notes: "" },
            { id: 23, text: "Stay at Opossum Bay", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "car",
            text: "Drive: Lake St. Clair → Hobart (2hrs 20mins)"
        }
    },
    {
        date: "Saturday, 27th July",
        location: "Departure",
        description: "Final Day - Departure",
        activities: [
            { id: 24, text: "Salamanca Markets in the morning", completed: false, notes: "" },
            { id: 25, text: "Afternoon flight home", completed: false, notes: "" }
        ],
        travelInfo: {
            icon: "plane",
            text: "Departure from Hobart"
        }
    }
];

// Application state
let showCompleted = true;
let currentActivityId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved data from localStorage
    loadItineraryState();
    
    // Render the timeline
    renderTimeline();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize mobile navigation
    setupMobileNav();
}

function loadItineraryState() {
    const savedState = localStorage.getItem('tasmania-itinerary');
    if (savedState) {
        const savedData = JSON.parse(savedState);
        // Merge saved data with default data
        itineraryData.forEach(day => {
            const savedDay = savedData.find(d => d.date === day.date);
            if (savedDay) {
                day.activities.forEach(activity => {
                    const savedActivity = savedDay.activities.find(a => a.id === activity.id);
                    if (savedActivity) {
                        activity.completed = savedActivity.completed;
                        activity.notes = savedActivity.notes || "";
                    }
                });
            }
        });
    }
}

function saveItineraryState() {
    localStorage.setItem('tasmania-itinerary', JSON.stringify(itineraryData));
}

function renderTimeline() {
    const timeline = document.getElementById('itinerary-timeline');
    timeline.innerHTML = '';

    itineraryData.forEach((day, index) => {
        const timelineItem = createTimelineItem(day, index);
        timeline.appendChild(timelineItem);
    });
}

function createTimelineItem(day, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item fade-in';
    
    // Check if all activities in the day are completed
    const allCompleted = day.activities.every(activity => activity.completed);
    if (allCompleted) {
        item.classList.add('completed');
    }

    const visibleActivities = showCompleted ? day.activities : day.activities.filter(a => !a.completed);

    item.innerHTML = `
        <div class="timeline-date">${day.date}</div>
        <div class="timeline-content">
            <h3>${day.location}</h3>
            <p>${day.description}</p>
            <ul class="activity-list">
                ${visibleActivities.map(activity => `
                    <li class="activity-item ${activity.completed ? 'completed' : ''}" 
                        data-activity-id="${activity.id}">
                        <div class="activity-checkbox ${activity.completed ? 'checked' : ''}" 
                             onclick="toggleActivity(${activity.id})">
                            ${activity.completed ? '<i class="fas fa-check"></i>' : ''}
                        </div>
                        <span onclick="openActivityModal(${activity.id})">${activity.text}</span>
                        ${activity.notes ? '<i class="fas fa-sticky-note" title="Has notes"></i>' : ''}
                    </li>
                `).join('')}
            </ul>
            <div class="travel-info">
                <i class="fas fa-${day.travelInfo.icon}"></i>
                <span>${day.travelInfo.text}</span>
            </div>
        </div>
    `;

    return item;
}

function setupEventListeners() {
    // Toggle completed activities visibility
    document.getElementById('toggle-completed').addEventListener('click', function() {
        showCompleted = !showCompleted;
        this.innerHTML = showCompleted ? 
            '<i class="fas fa-eye-slash"></i> Hide Completed' : 
            '<i class="fas fa-eye"></i> Show Completed';
        renderTimeline();
    });

    // Export itinerary
    document.getElementById('export-itinerary').addEventListener('click', exportItinerary);

    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('activity-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Modal action buttons
    document.getElementById('toggle-complete-btn').addEventListener('click', function() {
        if (currentActivityId) {
            toggleActivity(currentActivityId);
            closeModal();
        }
    });

    document.getElementById('add-note-btn').addEventListener('click', function() {
        if (currentActivityId) {
            const activity = findActivityById(currentActivityId);
            const note = prompt('Add a note for this activity:', activity.notes);
            if (note !== null) {
                activity.notes = note;
                saveItineraryState();
                renderTimeline();
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function toggleActivity(activityId) {
    const activity = findActivityById(activityId);
    if (activity) {
        activity.completed = !activity.completed;
        saveItineraryState();
        renderTimeline();
        updateMapForActivity(activityId);
    }
}

function findActivityById(id) {
    for (let day of itineraryData) {
        const activity = day.activities.find(a => a.id === id);
        if (activity) return activity;
    }
    return null;
}

function openActivityModal(activityId) {
    currentActivityId = activityId;
    const activity = findActivityById(activityId);
    if (!activity) return;

    const modal = document.getElementById('activity-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const toggleBtn = document.getElementById('toggle-complete-btn');

    title.textContent = activity.text;
    body.innerHTML = `
        <p><strong>Status:</strong> ${activity.completed ? 'Completed' : 'Pending'}</p>
        ${activity.notes ? `<p><strong>Notes:</strong> ${activity.notes}</p>` : ''}
        <p><strong>Activity ID:</strong> ${activity.id}</p>
    `;

    toggleBtn.textContent = activity.completed ? 'Mark as Incomplete' : 'Mark as Complete';
    toggleBtn.className = activity.completed ? 'btn-secondary' : 'btn-primary';

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('activity-modal').style.display = 'none';
    currentActivityId = null;
}

function updateMapForActivity(activityId) {
    // Placeholder for map integration
    const mapContainer = document.getElementById('map');
    const activity = findActivityById(activityId);
    
    if (activity && activity.completed) {
        mapContainer.style.background = '#e8f5e8';
        mapContainer.innerHTML = `
            <i class="fas fa-map-marked-alt"></i>
            <p>Activity completed: ${activity.text}</p>
            <small>Route information updated</small>
        `;
        
        setTimeout(() => {
            mapContainer.style.background = '#ecf0f1';
            mapContainer.innerHTML = `
                <i class="fas fa-map-marked-alt"></i>
                <p>Interactive map will be displayed here</p>
                <small>Click on itinerary items to see route details</small>
            `;
        }, 2000);
    }
}

function exportItinerary() {
    const exportData = {
        title: "Tasmania Adventure Itinerary",
        dateRange: "July 18-27, 2024",
        totalDays: 10,
        days: itineraryData.map(day => ({
            date: day.date,
            location: day.location,
            description: day.description,
            activities: day.activities.map(activity => ({
                text: activity.text,
                completed: activity.completed,
                notes: activity.notes
            })),
            travel: day.travelInfo.text
        })),
        completionStats: getCompletionStats()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tasmania-itinerary.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show success message
    showNotification('Itinerary exported successfully!');
}

function getCompletionStats() {
    const totalActivities = itineraryData.reduce((sum, day) => sum + day.activities.length, 0);
    const completedActivities = itineraryData.reduce((sum, day) => 
        sum + day.activities.filter(a => a.completed).length, 0);
    
    return {
        total: totalActivities,
        completed: completedActivities,
        percentage: Math.round((completedActivities / totalActivities) * 100)
    };
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add completion progress indicator
function addProgressIndicator() {
    const stats = getCompletionStats();
    const progressHtml = `
        <div class="progress-indicator">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${stats.percentage}%"></div>
            </div>
            <span class="progress-text">${stats.completed}/${stats.total} activities completed (${stats.percentage}%)</span>
        </div>
    `;
    
    const container = document.querySelector('.itinerary-controls');
    if (!container.querySelector('.progress-indicator')) {
        container.insertAdjacentHTML('afterend', progressHtml);
    }
}

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('activity-modal').style.display === 'block') {
        closeModal();
    }
});

// Initialize progress indicator on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addProgressIndicator, 500);
});

// Update progress indicator when activities change
const originalToggleActivity = toggleActivity;
toggleActivity = function(activityId) {
    originalToggleActivity(activityId);
    setTimeout(() => {
        const existingProgress = document.querySelector('.progress-indicator');
        if (existingProgress) {
            existingProgress.remove();
        }
        addProgressIndicator();
    }, 100);
};