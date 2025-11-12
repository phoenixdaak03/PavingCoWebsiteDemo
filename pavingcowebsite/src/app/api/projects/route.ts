import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(
            {
                status: 'success',
                message: 'Projects API endpoint',
                data: {
                    projects: [
                        {
                            id: 1,
                            name: 'Sample Project',
                            description: 'A sample paving project',
                            status: 'completed',
                        },
                    ],
                },
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { status: 'error', message: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        return NextResponse.json(
            {
                status: 'success',
                message: 'Project created',
                data: { id: Date.now(), ...body },
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { status: 'error', message: 'Invalid request' },
            { status: 400 }
        );
    }
}