export default (inputElement, callback) => {
    const filesSelected = inputElement.files;

    filesSelected.forEach(file => {
        const fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            const srcData = fileLoadedEvent.target.result; // <--- data: base64

            callback(srcData);
        };
        fileReader.readAsDataURL(file);
    });
};
