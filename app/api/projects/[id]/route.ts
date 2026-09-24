import  { NextRequest, NextResponse } from 'next/server'
import { getProjectById } from "@/lib/projects-db"

// GET api/projects/[id]
export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const {id: idParam } = await params;
    const id = Number(idParam);

    // 400 - Invalid ID
    if (Number.isNaN(id)) {
        return NextResponse.json({ error: "Invalid ID"}, { status: 400 });
    }
    const project = await getProjectById(id)
    // 404 - Project not found
    if (!project) {
        return NextResponse.json({ error: "Project not found"}, { status: 404 });
    }
    return NextResponse.json(project)
}

