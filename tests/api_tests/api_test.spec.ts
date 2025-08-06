import test, { expect } from "@playwright/test";

function generateRandomEmailPrefix(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

test.describe('@api', () => {

    test('Get all users', async ({ request }) => {
        const responseAllUsers = await request.get('https://petstore.swagger.io/v2/user/Shinko');

        expect(responseAllUsers.status()).toBe(200);
        const rrr = await responseAllUsers.json()
        console.log(rrr);

    });


    test('Create new user', async ({ request }) => {
        const randomEmailPrefix = generateRandomEmailPrefix();
        const userEmail = `${randomEmailPrefix}@qakotik.com`;
        const responseNewUser = await request.post('https://petstore.swagger.io/v2/user/createWithList', {
            data: [
                {
                    "id": 16,
                    "username": "Shinko",
                    "firstName": "Shinkori",
                    "lastName": "loli",
                    "email": userEmail,
                    "password": "string",
                    "phone": "string",
                    "userStatus": 0
                }
            ]
        });

        const responseBodyNewUser = await responseNewUser.json();
        console.log('Created user with email:', userEmail);
        expect(responseNewUser.status()).toBe(200);
    });
});

