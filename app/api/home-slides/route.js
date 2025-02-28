import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_HOME;
    
    if (!apiUrl) {
      return NextResponse.json(
        { error: 'API URL not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary headers here
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching home slides:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from WordPress API' },
      { status: 500 }
    );
  }
}
