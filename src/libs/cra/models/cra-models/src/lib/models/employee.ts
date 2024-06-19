export interface Employee {
    id: number;
    firstname: string;
    lastname: string;

    paidLeave: number;
    assignment: { [ dateLabel: string]: number | null };
}