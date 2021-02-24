function getTimeStampUTC() {
    //get today's date
    const d = new Date()
    d.format("%d")
    const opts = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }
    return `${d.getMonth()}/${d.getDay()}/${d.getFullYear()} ${d.getUTCHours()}:${d.getMinutes()}`
}

module.exports = getTimeStampUTC