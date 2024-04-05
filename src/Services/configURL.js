import axios from "axios";
import { localServ } from "./localService";
export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjIyLzA1LzIwNTAiLCJIZXRIYW5UaW1lIjoiMjU1NTQyNDAwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoyNjAyMDY1NjAwfQ.XYmCVZrAooVegRt_5KgPoXK3zRHpW8ATw5DnO6oMqfI";
export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN,
    token: localServ.user.get()?.token,
  },
});
