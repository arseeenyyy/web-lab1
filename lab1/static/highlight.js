function highlightXButton() {
    const xButtons = document.querySelectorAll('.x-button'); 
    xButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            xButtons.forEach(btn => btn.classList.remove('active')); 
            this.classList.add('active');
            const xInput = document.getElementById('x-value'); 
            xInput.value = this.value;
        });
    });
}


function addToTableRow(x, y, r, currentTime, execTime, hitResult) {
    const table = document.getElementById('result-table');

    const newRow = table.insertRow(); 

    const xCell = newRow.insertCell(0); 
    xCell.textContent = x;

    const yCell = newRow.insertCell(1); 
    yCell.textContent = y;

    const rCell = newRow.insertCell(2); 
    rCell.textContent = r; 

    const currentTimeCell = newRow.insertCell(3); 
    currentTimeCell.textContent = currentTime;

    const execTimeCell = newRow.insertCell(4); 
    execTimeCell.textContent = execTime;

    const hitResultCell = newRow.insertCell(5); 
    hitResultCell.textContent = hitResult;
}

function validateArguments(x, y) {
    document.getElementById('error-message').innerHTML = ''; 
    if (!x) {
        document.getElementById('error-message').innerHTML = 'Please choose X value'; 
        return false;
    }
    const yValueFloat = parseFloat(y); 
    if (isNaN(yValueFloat)) {
        document.getElementById('error-message').innerHTML = 'Y value should be numeric';
        return false;
    } else if (yValueFloat < -3 || yValueFloat > 3) {
        document.getElementById('error-message').innerHTML = 'Y value should be between -3 and 3';
        return false;
    }
    return true;
}

window.onload = highlightXButton;
