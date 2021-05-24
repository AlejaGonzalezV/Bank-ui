import { provider } from "./init-pact";
import { UserController } from "../../../src/controllers";
import { Matchers } from "@pact-foundation/pact";

const document = 1007554028;

describe('Given An User service', () => {
    describe('When a request to delete an user is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'document user',
                uponReceiving: 'a request to delete an user',
                withRequest: {
                    method: 'DELETE',
                    path: `/users/${document}`,
                },
                willRespondWith: {
                    status: 204,
                }
            });
        });

        it("Then it should return the right status", async() =>{

            const response = await UserController.delete(document);
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
}); 