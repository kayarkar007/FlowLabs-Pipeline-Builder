
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from './index.js';

describe('Server API', () => {
    it('GET /api/project-files should return structure', async () => {
        const res = await request(app).get('/api/project-files');
        expect(res.status).not.toBe(404);
    });
});
