export class LeftNav{
    DiplayName:string;
    Link:string;
    IsSubMenu:boolean;
    IsExternal:boolean;

    constructor(_displayName:string,_link:string,_isSubMenu:boolean,_isExternal:boolean){
        this.DiplayName=_displayName;
        this.Link=_link;
        this.IsSubMenu=_isSubMenu;
        this.IsExternal=_isExternal;
    }
}