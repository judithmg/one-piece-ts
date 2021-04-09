const { getAllCharacters, getAllDetails } = require('../controllers/optcController');

const Characters = require('../models/characterModel');
const Details = require('../models/detailModel');

jest.mock('../models/characterModel');
jest.mock('../models/detailModel');

describe('Given a optc contoller', () => {
    let req;
    let res;
    let fakeCharList;
    let fakeError;
    beforeEach(() => {
        res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
        };
        fakeCharList = [
            {
                name: 'Monkey D. Luffy',
                type: 'STR',
                class: 'Fighter',
                stars: 2,
                cost: 1,
                combo: 5,
                sockets: 0,
                maxLvl: 5,
                expToMax: 163,
                lvl1HP: 42,
                lvl1ATK: 15,
                lvl1RCV: 8,
                maxHP: 134,
                maxATK: 68,
                maxRCV: 15,
                growthRate: 1,
                id: 1,
                alias: 'モンキー・D・ルフィ',
                family: 'Monkey D. Luffy',
                cooldown: [3, 2],
            }];
        fakeError = 'error';
    });

    describe('when getAllCharacters is called', () => {
        test('Then it should return a response error if not found', async () => {
            Characters.find = jest.fn().mockRejectedValueOnce(fakeError);
            await getAllCharacters(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
        });
        test('Then it should return a response if all characters are found', async () => {
            Characters.find = jest.fn().mockResolvedValueOnce(fakeCharList);
            await getAllCharacters(req, res);
            expect(res.json).toHaveBeenCalled();
        });
        test('Then it should return a response with the data if found', async () => {
            Characters.find = jest.fn().mockResolvedValueOnce(fakeCharList);
            await getAllCharacters(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeCharList);
        });
    });
    describe('when getAllDetails is called', () => {
        test('Then it should return a response error if not found', async () => {
            Details.find = jest.fn().mockRejectedValueOnce(fakeError);
            await getAllDetails(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
        });
        test('Then it should return a response if all Details are found', async () => {
            Details.find = jest.fn().mockResolvedValueOnce(fakeCharList);
            await getAllDetails(req, res);
            expect(res.json).toHaveBeenCalled();
        });
        test('Then it should return a response with the data if found', async () => {
            Details.find = jest.fn().mockResolvedValueOnce(fakeCharList);
            await getAllDetails(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeCharList);
        });
    });
});
