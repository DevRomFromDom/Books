export type Action = { type: string; payload: object[] };

export const getBooks = (props: object[]): Action => ({
    type: 'GET_BOOKS',
    payload: props,
});
