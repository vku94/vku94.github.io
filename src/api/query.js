const GRAPHQL_API_URL = 'https://www.warcraftlogs.com/api/v2/client'
// Simplify as much as possible. No need to reissue a token since it lasts for 1 year
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTQ1ZTdhNi00N2E3LTQ3NzUtYWU5Ny0yNDAyYjE0ZGZiNzgiLCJqdGkiOiJjNGIzN2U5NThkYjE0ODQ1NGNhZTIxZDUyNDM4OGFlNTVhMzNjNDQ4NzJkOTY5ZTZmZWY2ZDk4NGJhNzkyNGI3NjQyNmNkYzVjNDEyY2JhYSIsImlhdCI6MTc0MDIzMDg1MS44NDAwNTIsIm5iZiI6MTc0MDIzMDg1MS44NDAwNTYsImV4cCI6MTc3MTMzNDg1MS44MjY5NTMsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.O2Pyt8W5aj1N_PIbEgMike4ps09u46eRFYlYLDXkYAHJ2Gz88ACT8uqx0cymDzR8eXJ5fNZ3nHCWx8_AO2m6wWRnw0A4GAtAKgHSBzIb9p0HjRuA1raYT3mWiQPQk9LVOmHZA5zjY0ezkaCW762r2bxzDZGoksE7aWWtACuneVW_HUpc_oPRlBJrq8nXB2TEvDwqeHGGzlME6dRHFyEyqvBodJdpfntkM9TttaSqkHygbB6aMYj59SLSkpeXgj-Hbu_d8wGyREL9dhyFNPwrw60xhARZK9KLpHIF05r_K2p7SwcDWP7aylS3YIxPZODaP-9XUzCSfHw1FVc_j3UdvLDeFFn_isf1tEPx8i9_ZEodnAOejLzG1GchxVQlPw-veYi9BTXQfj0AUVeQNJ-aMPEdYYILlrTDgEHQ6jwL-cmI-5wTSYm7iySLeRJ27kQZ1vXF6VTVlmthLJAFVORZWjTAZJBHl7ioshb2LRersn0t9L0v1-KYTjWH9a5AG8VuQPOfzvrnikIC-JOq6iPl4sqqwXhjLvFO1BZcZU6y_FhAFnBIoAFNS6OUcYWXmm2BhFx8s48_9NJvRukvQeXoLjEHeOYzih9FaLqlDxTevPqo6KlyJXRUiZNIfN_xk32ObdGnuKAoA17haJucTuHHeo6FtXQFu2F31ZiLMEpvS8k'

const query = async (query) => {
    return fetch(GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ query })
    })
        .then(response => response.json())
}

export default query
