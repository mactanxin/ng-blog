export class Post {
    userId: number;
	id: number;
	title: string;
	body?: string;
    created_at?: Date;
    updated_at?: Date;
    status?: string;
    tags?: string;
}