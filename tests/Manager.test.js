const Manager = require("/Users/shadinalarab/2022 BOOTCAMP/DEVELOP_MODULE10/module10_and_I_OOP/lib/manager.js");
const guava = new Manager('guava@bean.com', 5, 'guava', '101');

describe("Intern", () => {

//TEST FOR GITHUB
describe("getOfficeNumber", () => {
    it('should return Guavas offcie number', () => {
        expect(guava.officeNumber).toEqual('101')
    })
});

//TEST FOR ROLE OVERRIDE
describe('getRole', () => {
    it('should overide the Employee role', () => {
        expect(guava.role).toBe('Manager')
    })
});
})
