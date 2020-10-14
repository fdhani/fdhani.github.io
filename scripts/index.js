function setResult(id, value) {
    const resultField = document.getElementById(id);
    resultField.value = value;
}

(function() {
    const webhookInputsContainer = document.getElementById('webhook-inputs');
    const triggerInputsContainer = document.getElementById('trigger-inputs');

    const webhookInputGroups = webhookInputsContainer.getElementsByClassName('input-group');
    const triggerInputGroups = triggerInputsContainer.getElementsByClassName('input-group');

    const webhookResultObj = {}
    Array.from(webhookInputGroups).forEach(inputItem => {
        const input = inputItem.getElementsByTagName('input')[0]
        webhookResultObj[input.name] = input.value;

        input.addEventListener('input', function (event) {
            const target = event.target || {};
            webhookResultObj[target.name] = target.value;
            setResult('webhook-result', createWebhookResult(webhookResultObj))
        })
    });

    setResult('webhook-result', createWebhookResult(webhookResultObj))


    const triggerResultObj = {}
    Array.from(triggerInputGroups).forEach(inputItem => {
        const input = inputItem.getElementsByTagName('input')[0]
        console.log('input', input);
        triggerResultObj[input.name] = input.value;

        input.addEventListener('input', function (event) {
            const target = event.target || {};
            triggerResultObj[target.name] = target.value;
            const result = createTriggerResult(triggerResultObj)
            setResult('trigger-result', result)
        })
    });
    setResult('trigger-result', createTriggerResult(triggerResultObj))


})()