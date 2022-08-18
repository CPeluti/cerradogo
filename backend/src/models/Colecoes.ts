import { Schema, model} from 'mongoose'

export interface Collectables{
        name: string
        rarity: string
        about: string 
    }

const collectionSchema = new Schema<Collectables>({
    name: {type: String, required: true},
    rarity: {type: String, required: true},
    about: {type: String, required: true}
    
})

const CollectionModel = model<Collectables>('Collectable', collectionSchema)

export default CollectionModel