import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_NOTES,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' }
})