document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const xValue = document.getElementById('x-value').value; 
    const yValue = document.getElementById('y-value').value; 
    const rValue = document.getElementById('r-value').value;
    const currentTime = new Date().toLocaleString(); 

    if (!validateArguments(xValue, yValue)) return; 

    const data = {
        x: xValue, 
        y: yValue, 
        r: rValue
    };
    alert(data.x + " " + data.y + " " + data.r);

    fetch(`./fcgi-bin/labwork1.jar?x=${xValue}&y=${yValue}&r=${rValue}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) 
            throw new Error('network or server error');
        return response.json();
    })
    .then(response => {
        console.log(response); 
        const hitResult = response.result ? 'hit' : 'miss';
        const executionTime = response.executionTime;
        addToTableRow(xValue, yValue, rValue, currentTime, executionTime, hitResult);
    })
    .catch(error => {
        console.error('error: ', error);
    });
});
