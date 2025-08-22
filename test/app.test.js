const request =require('supertest')
const {app,server}=require('../app')


describe('GET /',()=>{
    it("ahould return 200 status and the correct message ", async()=>{
    const respone=await request(app).get("/")
    expect(respone.status).toBe(200);
    expect(respone.text).toBe("welcome to shpoeasy for linkloigc ");
    })
})