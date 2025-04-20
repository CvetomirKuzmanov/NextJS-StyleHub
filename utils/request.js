'use client';


const request = async (method, url, data, options = {}) => {
  if (method !== 'GET') {
    options.method = method;
  }
  
  try {
    let authData = {};
    if (typeof window !== 'undefined') {
      try {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
          authData = JSON.parse(storedAuth);
        }
      } catch (e) {
        console.error('Error parsing auth data:', e);
      }
    }
  
    if (authData && authData.accessToken) {
      options = {
        ...options,
        headers: {
          'X-Authorization': authData.accessToken,
          ...options.headers,
        },
      };
    }
  
    if (data) {
      options = {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
      };
    }
  
    const response = await fetch(url, options);
    
    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
      return;
    }
    
    if (!response.ok) {
      const result = await response.json();
      throw result;
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const requestUtils = {
  get: (url, options) => request('GET', url, null, options),
  post: (url, data, options) => request('POST', url, data, options),
  put: (url, data, options) => request('PUT', url, data, options),
  delete: (url, data, options) => request('DELETE', url, data, options),
  baseRequest: request,
};

export default requestUtils;