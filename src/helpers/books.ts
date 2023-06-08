
export const incrementArrayBy = <T, U extends number>(array: T[], value: U): T[] => {
    let initial: T[] = [];

    for (let i = 0; i < value; i++) {
        initial = [...initial, ...array];
    }

    return initial;
};
