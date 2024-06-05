import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import Cookies from "universal-cookie";

const cookies = new Cookies()

export type ClientResponse<T> = {
    success: boolean;
    data: T;
    statusCode: number;
};

export class LibraryClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:8080',
        });
    }

    public async login(
        data: LoginDto,
    ): Promise<ClientResponse<LoginResponseDto | null>> {
        try {
            const response: AxiosResponse<LoginResponseDto> = await this.client.post(
                '/login',
                data,
            );
            console.log(response.data);

            // this.client.defaults.headers.common['Authorization'] =
            //     `Bearer ${response.data}`;

            const token = response.data;

            if (token) {
                cookies.set('token', token);
                console.log('Token set:', token);
                this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } else {
                console.error('Token not found in response data');
            }

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    /**
     * BOOKS
     */
    public async getBooks(): Promise<ClientResponse<any | null>> {
        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }

        try {
            const response = await this.client.get('/api/books');
            console.log(response.data)

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    public async addBook(data: any): Promise<ClientResponse<any | null>> {

        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }

        try {
            const response = await this.client.post('/api/books', data);
            console.log(response.data);

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    /**
     * USERS
     */
    public async getUsers(): Promise<ClientResponse<any | null>> {

        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }

        try {
            const response = await this.client.get('/api/users');
            console.log(response.data)

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    public async addUser(data: any): Promise<ClientResponse<any | null>> {

        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }

        try {
            const response = await this.client.post('/api/users', data);
            console.log(response.data);

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    /**
     * LOANS
     */
    public async getLoans(): Promise<ClientResponse<any | null>> {

        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }

        try {
            const response = await this.client.get('/api/loans');
            // console.log(response.data)

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }

    public async addLoan(data: any): Promise<ClientResponse<any | null>> {

        const token = cookies.get('token');
        if (token) {
            this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('No token found, user might not be authenticated');
            return {
                success: false,
                data: null,
                statusCode: 401,
            };
        }
        
        try {
            const response = await this.client.post('/api/loans', data);
            console.log(response.data);

            return {
                success: true,
                data: response.data,
                statusCode: response.status,
            };
        } catch (error) {
            const axiosError = error as AxiosError<Error>;

            return {
                success: false,
                data: null,
                statusCode: axiosError.response?.status || 0,
            };
        }
    }
}

