
export class PhotoRegister {

    lastModified;
    lastModifiedDate;
    name;
    size;
    type;
    webkitRelativePath;

    constructor(
        webkitRelativePath,
        lastModifiedDate,
        lastModified,
        name,
        size,
        type,
    ) {
        Object.setPrototypeOf(this, File);

        this.lastModified = lastModified;
        this.lastModifiedDate = lastModifiedDate;
        this.name = name;
        this.size = size;
        this.type = type;
        this.webkitRelativePath = webkitRelativePath;
    }
}