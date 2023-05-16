import * as auth from './featureModule/user/interface/authstate' 
import * as admin from './featureModule/admin/interfaces/authstate' 


export interface appstateinterface{
    authentication:auth.authstate
    adminstate:admin.authstate
}
