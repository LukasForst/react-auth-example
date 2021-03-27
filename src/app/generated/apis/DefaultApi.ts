/* tslint:disable */
/* eslint-disable */
/**
 * Mild Blue - Covid Vaxx
 * Covid Vaxx API
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: support@mild.blue
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ApplicationInformationDtoOut,
    ApplicationInformationDtoOutFromJSON,
    ApplicationInformationDtoOutToJSON,
    CredentialsDtoIn,
    CredentialsDtoInFromJSON,
    CredentialsDtoInToJSON,
    DataCorrectnessConfirmationDetailDtoOut,
    DataCorrectnessConfirmationDetailDtoOutFromJSON,
    DataCorrectnessConfirmationDetailDtoOutToJSON,
    DataCorrectnessDtoIn,
    DataCorrectnessDtoInFromJSON,
    DataCorrectnessDtoInToJSON,
    InsuranceCompanyDetailsDtoOut,
    InsuranceCompanyDetailsDtoOutFromJSON,
    InsuranceCompanyDetailsDtoOutToJSON,
    LoginDtoIn,
    LoginDtoInFromJSON,
    LoginDtoInToJSON,
    NurseCreationDtoIn,
    NurseCreationDtoInFromJSON,
    NurseCreationDtoInToJSON,
    Ok,
    OkFromJSON,
    OkToJSON,
    PatientDtoOut,
    PatientDtoOutFromJSON,
    PatientDtoOutToJSON,
    PatientRegistrationDtoIn,
    PatientRegistrationDtoInFromJSON,
    PatientRegistrationDtoInToJSON,
    PatientUpdateDtoIn,
    PatientUpdateDtoInFromJSON,
    PatientUpdateDtoInToJSON,
    PersonnelDtoOut,
    PersonnelDtoOutFromJSON,
    PersonnelDtoOutToJSON,
    QuestionDtoOut,
    QuestionDtoOutFromJSON,
    QuestionDtoOutToJSON,
    ServiceHealthDtoOut,
    ServiceHealthDtoOutFromJSON,
    ServiceHealthDtoOutToJSON,
    SystemStatisticsDtoOut,
    SystemStatisticsDtoOutFromJSON,
    SystemStatisticsDtoOutToJSON,
    UserLoginResponseDtoOut,
    UserLoginResponseDtoOutFromJSON,
    UserLoginResponseDtoOutToJSON,
    UserRegisteredDtoOut,
    UserRegisteredDtoOutFromJSON,
    UserRegisteredDtoOutToJSON,
    UserRegistrationDtoIn,
    UserRegistrationDtoInFromJSON,
    UserRegistrationDtoInToJSON,
    VaccinationDetailDtoOut,
    VaccinationDetailDtoOutFromJSON,
    VaccinationDetailDtoOutToJSON,
    VaccinationDtoIn,
    VaccinationDtoInFromJSON,
    VaccinationDtoInToJSON,
} from '../models';

export interface ApiAdminDataCorrectnessGetRequest {
    id: string;
}

export interface ApiAdminDataCorrectnessIdGetRequest {
    id: string;
}

export interface ApiAdminDataCorrectnessPostRequest {
    dataCorrectnessDtoIn?: DataCorrectnessDtoIn;
}

export interface ApiAdminLoginPostRequest {
    loginDtoIn?: LoginDtoIn;
}

export interface ApiAdminNursePostRequest {
    credentialsDtoIn?: CredentialsDtoIn;
}

export interface ApiAdminNursePutRequest {
    nurseCreationDtoIn?: NurseCreationDtoIn;
}

export interface ApiAdminPatientFilterGetRequest {
    email?: string;
    phoneNumber?: string;
    vaccinated?: boolean;
}

export interface ApiAdminPatientGetRequest {
    personalNumber: string;
}

export interface ApiAdminPatientIdDeleteRequest {
    id: string;
}

export interface ApiAdminPatientIdGetRequest {
    id: string;
}

export interface ApiAdminPatientIdPutRequest {
    id: string;
    patientUpdateDtoIn?: PatientUpdateDtoIn;
}

export interface ApiAdminRegisterPostRequest {
    userRegistrationDtoIn?: UserRegistrationDtoIn;
}

export interface ApiAdminStatisticsGetRequest {
    from?: Date;
    to?: Date;
}

export interface ApiAdminVaccinationGetRequest {
    id: string;
}

export interface ApiAdminVaccinationIdGetRequest {
    id: string;
}

export interface ApiAdminVaccinationPostRequest {
    vaccinationDtoIn?: VaccinationDtoIn;
}

export interface ApiPatientPostRequest {
    captcha: string;
    patientRegistrationDtoIn?: PatientRegistrationDtoIn;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns all questions and refreshes in-memory cache.
     */
    async apiAdminCacheRefreshGetRaw(): Promise<runtime.ApiResponse<Array<QuestionDtoOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/cache-refresh`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestionDtoOutFromJSON));
    }

    /**
     * Returns all questions and refreshes in-memory cache.
     */
    async apiAdminCacheRefreshGet(): Promise<Array<QuestionDtoOut>> {
        const response = await this.apiAdminCacheRefreshGetRaw();
        return await response.value();
    }

    /**
     * Get detail about data correctness check for given patient ID.
     */
    async apiAdminDataCorrectnessGetRaw(requestParameters: ApiAdminDataCorrectnessGetRequest): Promise<runtime.ApiResponse<DataCorrectnessConfirmationDetailDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminDataCorrectnessGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/data-correctness`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataCorrectnessConfirmationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Get detail about data correctness check for given patient ID.
     */
    async apiAdminDataCorrectnessGet(requestParameters: ApiAdminDataCorrectnessGetRequest): Promise<DataCorrectnessConfirmationDetailDtoOut> {
        const response = await this.apiAdminDataCorrectnessGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get detail about data correctness check for given data ID.
     */
    async apiAdminDataCorrectnessIdGetRaw(requestParameters: ApiAdminDataCorrectnessIdGetRequest): Promise<runtime.ApiResponse<DataCorrectnessConfirmationDetailDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminDataCorrectnessIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/data-correctness/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataCorrectnessConfirmationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Get detail about data correctness check for given data ID.
     */
    async apiAdminDataCorrectnessIdGet(requestParameters: ApiAdminDataCorrectnessIdGetRequest): Promise<DataCorrectnessConfirmationDetailDtoOut> {
        const response = await this.apiAdminDataCorrectnessIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Register that the data about patient are correct. Requires DOCTOR role.
     */
    async apiAdminDataCorrectnessPostRaw(requestParameters: ApiAdminDataCorrectnessPostRequest): Promise<runtime.ApiResponse<DataCorrectnessConfirmationDetailDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/data-correctness`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DataCorrectnessDtoInToJSON(requestParameters.dataCorrectnessDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataCorrectnessConfirmationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Register that the data about patient are correct. Requires DOCTOR role.
     */
    async apiAdminDataCorrectnessPost(requestParameters: ApiAdminDataCorrectnessPostRequest): Promise<DataCorrectnessConfirmationDetailDtoOut> {
        const response = await this.apiAdminDataCorrectnessPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Login endpoint for the registered users such as administrators and doctors.
     */
    async apiAdminLoginPostRaw(requestParameters: ApiAdminLoginPostRequest): Promise<runtime.ApiResponse<UserLoginResponseDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/admin/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginDtoInToJSON(requestParameters.loginDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserLoginResponseDtoOutFromJSON(jsonValue));
    }

    /**
     * Login endpoint for the registered users such as administrators and doctors.
     */
    async apiAdminLoginPost(requestParameters: ApiAdminLoginPostRequest): Promise<UserLoginResponseDtoOut> {
        const response = await this.apiAdminLoginPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * If the given user exist, returns all current nurses in the database.
     */
    async apiAdminNursePostRaw(requestParameters: ApiAdminNursePostRequest): Promise<runtime.ApiResponse<Array<PersonnelDtoOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/admin/nurse`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CredentialsDtoInToJSON(requestParameters.credentialsDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonnelDtoOutFromJSON));
    }

    /**
     * If the given user exist, returns all current nurses in the database.
     */
    async apiAdminNursePost(requestParameters: ApiAdminNursePostRequest): Promise<Array<PersonnelDtoOut>> {
        const response = await this.apiAdminNursePostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates nurse entity.
     */
    async apiAdminNursePutRaw(requestParameters: ApiAdminNursePutRequest): Promise<runtime.ApiResponse<Ok>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/nurse`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NurseCreationDtoInToJSON(requestParameters.nurseCreationDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OkFromJSON(jsonValue));
    }

    /**
     * Creates nurse entity.
     */
    async apiAdminNursePut(requestParameters: ApiAdminNursePutRequest): Promise<Ok> {
        const response = await this.apiAdminNursePutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get patient the parameters. Filters by and clause. Empty parameters return all patients.
     */
    async apiAdminPatientFilterGetRaw(requestParameters: ApiAdminPatientFilterGetRequest): Promise<runtime.ApiResponse<Array<PatientDtoOut>>> {
        const queryParameters: any = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.phoneNumber !== undefined) {
            queryParameters['phoneNumber'] = requestParameters.phoneNumber;
        }

        if (requestParameters.vaccinated !== undefined) {
            queryParameters['vaccinated'] = requestParameters.vaccinated;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/patient/filter`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PatientDtoOutFromJSON));
    }

    /**
     * Get patient the parameters. Filters by and clause. Empty parameters return all patients.
     */
    async apiAdminPatientFilterGet(requestParameters: ApiAdminPatientFilterGetRequest): Promise<Array<PatientDtoOut>> {
        const response = await this.apiAdminPatientFilterGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get patient by personal number.
     */
    async apiAdminPatientGetRaw(requestParameters: ApiAdminPatientGetRequest): Promise<runtime.ApiResponse<PatientDtoOut>> {
        if (requestParameters.personalNumber === null || requestParameters.personalNumber === undefined) {
            throw new runtime.RequiredError('personalNumber','Required parameter requestParameters.personalNumber was null or undefined when calling apiAdminPatientGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.personalNumber !== undefined) {
            queryParameters['personalNumber'] = requestParameters.personalNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/patient`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PatientDtoOutFromJSON(jsonValue));
    }

    /**
     * Get patient by personal number.
     */
    async apiAdminPatientGet(requestParameters: ApiAdminPatientGetRequest): Promise<PatientDtoOut> {
        const response = await this.apiAdminPatientGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete user by ID.
     */
    async apiAdminPatientIdDeleteRaw(requestParameters: ApiAdminPatientIdDeleteRequest): Promise<runtime.ApiResponse<Ok>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminPatientIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/patient/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OkFromJSON(jsonValue));
    }

    /**
     * Delete user by ID.
     */
    async apiAdminPatientIdDelete(requestParameters: ApiAdminPatientIdDeleteRequest): Promise<Ok> {
        const response = await this.apiAdminPatientIdDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get patient by ID.
     */
    async apiAdminPatientIdGetRaw(requestParameters: ApiAdminPatientIdGetRequest): Promise<runtime.ApiResponse<PatientDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminPatientIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/patient/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PatientDtoOutFromJSON(jsonValue));
    }

    /**
     * Get patient by ID.
     */
    async apiAdminPatientIdGet(requestParameters: ApiAdminPatientIdGetRequest): Promise<PatientDtoOut> {
        const response = await this.apiAdminPatientIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates patient with given change set - note you should send just the values that changed and not whole entity.
     */
    async apiAdminPatientIdPutRaw(requestParameters: ApiAdminPatientIdPutRequest): Promise<runtime.ApiResponse<PatientDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminPatientIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/patient/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PatientUpdateDtoInToJSON(requestParameters.patientUpdateDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PatientDtoOutFromJSON(jsonValue));
    }

    /**
     * Updates patient with given change set - note you should send just the values that changed and not whole entity.
     */
    async apiAdminPatientIdPut(requestParameters: ApiAdminPatientIdPutRequest): Promise<PatientDtoOut> {
        const response = await this.apiAdminPatientIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     * Register new user of the system.
     */
    async apiAdminRegisterPostRaw(requestParameters: ApiAdminRegisterPostRequest): Promise<runtime.ApiResponse<UserRegisteredDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegistrationDtoInToJSON(requestParameters.userRegistrationDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserRegisteredDtoOutFromJSON(jsonValue));
    }

    /**
     * Register new user of the system.
     */
    async apiAdminRegisterPost(requestParameters: ApiAdminRegisterPostRequest): Promise<UserRegisteredDtoOut> {
        const response = await this.apiAdminRegisterPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Verify that the currently used token is valid. Returns 200 if token is correct, 401 otherwise.
     */
    async apiAdminSelfGetRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/self`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Verify that the currently used token is valid. Returns 200 if token is correct, 401 otherwise.
     */
    async apiAdminSelfGet(): Promise<void> {
        await this.apiAdminSelfGetRaw();
    }

    /**
     */
    async apiAdminStatisticsGetRaw(requestParameters: ApiAdminStatisticsGetRequest): Promise<runtime.ApiResponse<SystemStatisticsDtoOut>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = (requestParameters.from as any).toISOString();
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = (requestParameters.to as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/statistics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SystemStatisticsDtoOutFromJSON(jsonValue));
    }

    /**
     */
    async apiAdminStatisticsGet(requestParameters: ApiAdminStatisticsGetRequest): Promise<SystemStatisticsDtoOut> {
        const response = await this.apiAdminStatisticsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get vaccination detail for given patient ID.
     */
    async apiAdminVaccinationGetRaw(requestParameters: ApiAdminVaccinationGetRequest): Promise<runtime.ApiResponse<VaccinationDetailDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminVaccinationGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/vaccination`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VaccinationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Get vaccination detail for given patient ID.
     */
    async apiAdminVaccinationGet(requestParameters: ApiAdminVaccinationGetRequest): Promise<VaccinationDetailDtoOut> {
        const response = await this.apiAdminVaccinationGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get vaccination detail by given vaccination id.
     */
    async apiAdminVaccinationIdGetRaw(requestParameters: ApiAdminVaccinationIdGetRequest): Promise<runtime.ApiResponse<VaccinationDetailDtoOut>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAdminVaccinationIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/vaccination/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VaccinationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Get vaccination detail by given vaccination id.
     */
    async apiAdminVaccinationIdGet(requestParameters: ApiAdminVaccinationIdGetRequest): Promise<VaccinationDetailDtoOut> {
        const response = await this.apiAdminVaccinationIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Register that the patient was vaccinated. Returns vaccination detail.
     */
    async apiAdminVaccinationPostRaw(requestParameters: ApiAdminVaccinationPostRequest): Promise<runtime.ApiResponse<VaccinationDetailDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("jwtAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/admin/vaccination`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VaccinationDtoInToJSON(requestParameters.vaccinationDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VaccinationDetailDtoOutFromJSON(jsonValue));
    }

    /**
     * Register that the patient was vaccinated. Returns vaccination detail.
     */
    async apiAdminVaccinationPost(requestParameters: ApiAdminVaccinationPostRequest): Promise<VaccinationDetailDtoOut> {
        const response = await this.apiAdminVaccinationPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns list of all available insurance companies.
     */
    async apiInsuranceCompaniesGetRaw(): Promise<runtime.ApiResponse<Array<InsuranceCompanyDetailsDtoOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/insurance-companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InsuranceCompanyDetailsDtoOutFromJSON));
    }

    /**
     * Returns list of all available insurance companies.
     */
    async apiInsuranceCompaniesGet(): Promise<Array<InsuranceCompanyDetailsDtoOut>> {
        const response = await this.apiInsuranceCompaniesGetRaw();
        return await response.value();
    }

    /**
     * Save patient registration to the database.
     */
    async apiPatientPostRaw(requestParameters: ApiPatientPostRequest): Promise<runtime.ApiResponse<Ok>> {
        if (requestParameters.captcha === null || requestParameters.captcha === undefined) {
            throw new runtime.RequiredError('captcha','Required parameter requestParameters.captcha was null or undefined when calling apiPatientPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.captcha !== undefined) {
            queryParameters['captcha'] = requestParameters.captcha;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/patient`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PatientRegistrationDtoInToJSON(requestParameters.patientRegistrationDtoIn),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OkFromJSON(jsonValue));
    }

    /**
     * Save patient registration to the database.
     */
    async apiPatientPost(requestParameters: ApiPatientPostRequest): Promise<Ok> {
        const response = await this.apiPatientPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns all questions that patient needs to answer.
     */
    async apiQuestionsGetRaw(): Promise<runtime.ApiResponse<Array<QuestionDtoOut>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestionDtoOutFromJSON));
    }

    /**
     * Returns all questions that patient needs to answer.
     */
    async apiQuestionsGet(): Promise<Array<QuestionDtoOut>> {
        const response = await this.apiQuestionsGetRaw();
        return await response.value();
    }

    /**
     */
    async apiStatusGetRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiStatusGet(): Promise<void> {
        await this.apiStatusGetRaw();
    }

    /**
     */
    async apiStatusHealthGetRaw(): Promise<runtime.ApiResponse<ServiceHealthDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/status/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceHealthDtoOutFromJSON(jsonValue));
    }

    /**
     */
    async apiStatusHealthGet(): Promise<ServiceHealthDtoOut> {
        const response = await this.apiStatusHealthGetRaw();
        return await response.value();
    }

    /**
     * Returns version of the application.
     */
    async apiVersionGetRaw(): Promise<runtime.ApiResponse<ApplicationInformationDtoOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationInformationDtoOutFromJSON(jsonValue));
    }

    /**
     * Returns version of the application.
     */
    async apiVersionGet(): Promise<ApplicationInformationDtoOut> {
        const response = await this.apiVersionGetRaw();
        return await response.value();
    }

}