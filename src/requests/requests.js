import axios from 'axios';

export const dbReq = axios.create({
  baseURL: "https://rr4-forum-server.herokuapp.com/",
  headers: { 'Content-Type': 'application/json' },
});

export const get_all_threads = () => dbReq.get('/');

export const get_thread_by_id = (id) => dbReq.get(`/get_thread/${id}`);
export const get_topics_by_id_thread = (id_thread) => dbReq.get(`/thread/${id_thread}`);
export const create_new_topic = (data) => dbReq.post(`thread/${data['id_thread']}/create_new_topic`, data);

export const get_topic_by_id = (id) => dbReq.get(`/get_topic/${id}`);
export const get_msgs_by_id_topic = (id_topic) => dbReq.get(`/topic/${id_topic}`);
export const create_new_msg = (data) => dbReq.post(`thread/${data['id_thread']}/topic/${data['id_topic']}/create_new_message`, data);
