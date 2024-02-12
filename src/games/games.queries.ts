export const gameQueries = {
    getGames: `
        SELECT
            id,
            name,
            release_date,
            developer,
            publisher
        FROM Games
    `,

    getGameById: `
        SELECT
            id,
            name,
            release_date,
            developer,
            publisher
        FROM Games
        WHERE id = ?
    `,

    readGamesByDeveloper: `
        SELECT
            id,
            name,
            release_date,
            developer,
            publisher
        FROM Games
        WHERE developer = ?
    `,

    createGame: `
        INSERT INTO Games (name, release_date, developer, publisher) VALUES (?, ?, ?, ?)
    `,

    updateGame: `
        UPDATE Games SET name = ?, release_date = ?, developer = ?, publisher = ? WHERE id = ?
    `,

    deleteGame: `
        DELETE FROM Games WHERE id = ?
    `
};
