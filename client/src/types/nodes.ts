export interface CommonNodeData {
    label: string;
    value?: string | number | boolean | any[];
    result?: string | number | boolean | any[];
    error?: string;
    op?: string;
    varName?: string;
    mode?: 'create' | 'push' | 'get';
    [key: string]: unknown;
}
