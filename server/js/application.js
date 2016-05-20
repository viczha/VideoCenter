App.onLaunch = function(options) {
    const alertDocument = createAlertDocument();
    navigationDocument.pushDocument(alertDocument);
};
/**
 * Convenience function to create a TVML alert document with a title and description.
 */
function createAlertDocument(title, description, isModal) {
    // Ensure the text color is appropriate if the alert isn't going to be shown modally.
    const textStyle = (isModal) ? "" : "color: rgb(0,0,0)";



    const template = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <alertTemplate>
                <title style="${textStyle}">${title}</title>
                <description style="${textStyle}">${description}</description>
            </alertTemplate>
        </document>
    `;
    return new DOMParser().parseFromString(template, "application/xml");
}

