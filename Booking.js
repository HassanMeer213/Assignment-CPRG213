document.addEventListener('DOMContentLoaded', function() {
    // Variables for cost and selected days
    let dailyRate = 35; // Default rate per day
    let selectedDays = [];
    
    // Elements from the DOM
    const fullDayRateBtn = document.getElementById('full');
    const halfDayRateBtn = document.getElementById('half');
    const clearDaysBtn = document.getElementById('clear-button');
    const calculatedCostDisplay = document.getElementById('calculated-cost');
    const dayButtons = document.querySelectorAll('.day-selector li');

    // Event handler for selecting/deselecting days
    dayButtons.forEach(function(dayButton) {
        dayButton.addEventListener('click', function() {
            toggleDaySelection(dayButton);
            updateTotalCost();
        });
    });

    // Event handler for clearing selected days
    clearDaysBtn.addEventListener('click', function() {
        clearSelectedDays();
        updateTotalCost();
    });

    // Event handler for setting full-day rate
    fullDayRateBtn.addEventListener('click', function() {
        setDailyRate(35);
        toggleRateButton('full');
        updateTotalCost();
    });

    // Event handler for setting half-day rate
    halfDayRateBtn.addEventListener('click', function() {
        setDailyRate(20);
        toggleRateButton('half');
        updateTotalCost();
    });

    // Function to toggle day selection
    function toggleDaySelection(button) {
        const dayId = button.id;
        const dayIndex = selectedDays.indexOf(dayId);

        if (dayIndex === -1) {
            selectedDays.push(dayId);
            button.classList.add('clicked');
        } else {
            selectedDays.splice(dayIndex, 1);
            button.classList.remove('clicked');
        }
    }

    // Function to clear selected days
    function clearSelectedDays() {
        selectedDays.forEach(function(dayId) {
            document.getElementById(dayId).classList.remove('clicked');
        });
        selectedDays = [];
    }

    // Function to set daily rate
    function setDailyRate(rate) {
        dailyRate = rate;
    }

    // Function to toggle rate button
    function toggleRateButton(rateType) {
        if (rateType === 'full') {
            fullDayRateBtn.classList.add('clicked');
            halfDayRateBtn.classList.remove('clicked');
        } else if (rateType === 'half') {
            halfDayRateBtn.classList.add('clicked');
            fullDayRateBtn.classList.remove('clicked');
        }
    }

    // Function to update total cost
    function updateTotalCost() {
        const totalCost = dailyRate * selectedDays.length;
        calculatedCostDisplay.textContent = totalCost;
    }
});