
export class FileItem {
    public file: File;
    public fileName: string;
    // url de firebase para poder ver la imagen
    public urlImage: string;
    public isUploading: boolean;
    public progress: number;

    constructor( file: File ) {
        this.file = file;
        this.fileName = file.name;
        this.isUploading = false;
        this.progress = 0;
    }

}
