import { provider } from "./init-pact";
import { UserController } from "../../../src/controllers";
import { Matchers } from "@pact-foundation/pact";

const user = {
    name: "John Doe",
    document: 1111,
    username: "Jd12",
    active: true
}
describe('Given An User service', () => {
    describe('When the edit request for an user is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'edit user',
                uponReceiving: 'Request to edit an user',
                withRequest: {
                    method: 'PUT',
                    path: `/users/${user.document}`,
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: Matchers.like(user),
                },
                willRespondWith: {
                    status: 200,
                    body: {
                        name: Matchers.string("John Doe"),
                        document: Matchers.like(1111),
                        id: Matchers.like(11),
                        username: Matchers.string("Jd12"),
                        active: Matchers.boolean(true)
                        },
                    headers: {
                        'Content-Type': 'application/json',
                      },
                }
            });
        });

        it("Then it should return the right data", async() =>{

            const response = await UserController.edit(user);
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});