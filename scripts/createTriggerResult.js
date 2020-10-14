function createTriggerResult(value) {
    const func = value.function;
    const threshold = value.threshold;
    const range = value.range;
    const query = value.query;
    const logFile = value.logFile;

    const block = `${func}:${range}((${query}) ($logfile contains "${logFile}")) > ${threshold}`

    return String(block);
}
