import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Placeholder for contact form handling
        console.log('Contact form submission:', body);
        
        return NextResponse.json(
            { message: 'Contact form received' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Failed to process contact form' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Contact API endpoint' },
        { status: 200 }
    );
}