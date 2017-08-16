export class AlertModel {
    public AlertMessageId: number;
    public FileName: string;
    public FileDataId: number;
    public OrganizationId: number;
    public ConversationLog: boolean;
    public Message: string;    
}


export class AlertModelList {
    public alertModel: AlertModel[];

    constructor() {        
        this.alertModel = [{ "AlertMessageId": 100, "FileName": "WDA123", "FileDataId": 100909, "OrganizationId": 100909, "ConversationLog": true, "Message": "Lock Expiry" },
        { "AlertMessageId": 101, "FileName": "WDA124", "FileDataId": 100910, "OrganizationId": 100909, "ConversationLog": true, "Message": "Lock Cancelled" },
        { "AlertMessageId": 101, "FileName": "WDA126", "FileDataId": 100911, "OrganizationId": 100909, "ConversationLog": false, "Message": "Loan Withdrawn Lock Cancelled" },
        ];
    }

    public GetAlertModel(): AlertModel[] {        
        return this.alertModel;
    }
}