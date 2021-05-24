import { provider } from "./init-pact";
import { UserController } from "../../../src/controllers";
import { Matchers } from "@pact-foundation/pact";

describe('Given An User service', () => {
    describe('When a request to list all the users is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'has users',
                uponReceiving: 'a request to get all users',
                withRequest: {
                    method: 'GET',
                    path: '/users'
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.eachLike(
                        {
                        name: Matchers.string("John Doe"),
                        document: Matchers.like(1111),
                        id: Matchers.like(11),
                        username: Matchers.string("Jd12"),
                        active: Matchers.boolean(true)
                        }
                    )
                }
            });
        });

        it("Then it should return the right data", async() =>{
            const response = await UserController.list();
            expect(response.data).toMatchSnapshot();
            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});