import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            status: 'error',
            message: 'Intentional 500 error for rollback drill',
            timestamp: new Date().toISOString(),
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
};