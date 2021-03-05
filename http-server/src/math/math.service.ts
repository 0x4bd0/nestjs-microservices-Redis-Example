import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";




@Injectable()
export class MathService {
    private client: ClientProxy
    
    constructor() {
        this.client = ClientProxyFactory.create({
                    transport: Transport.REDIS,
                    options: {
                    url : 'redis://localhost:6379'
                    }
        })
    }

    public SumNumbers(data: Array<number>) {
        return this.client.send<number>('sum', data)
    }


}