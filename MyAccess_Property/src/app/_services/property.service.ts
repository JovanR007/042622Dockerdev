import { Injectable } from '@angular/core';
import { Property } from '../_models/property';
import { PROPERTY } from '../_data/mock';
import { Observable, of } from 'rxjs';
import { Role } from '../_models/role';
import { ROLE } from '../_data/roles';
import { Tenant } from '../_models/tenant';
import { TENANT } from '../_data/tenant-log';
import { TenantSpecific } from '../_models/tenant-specific';
import { TENANTSPEC } from '../_data/tenant-spec';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  prop: Property[] = PROPERTY;
  role: Role[] = ROLE;
  tenant: Tenant[] = TENANT;
  tenantspec: TenantSpecific[] = TENANTSPEC;
  constructor() { }
  getProperty(): Observable<Property[]>{
    return of (this.prop);
  }

  getRole(): Observable<Role[]>{
    return of (this.role);
  }

  getTenant(): Observable<Tenant[]>{
    return of (this.tenant);
  }

  getTenantSpec():Observable<TenantSpecific[]>{
    return of (this.tenantspec)
  }
}
