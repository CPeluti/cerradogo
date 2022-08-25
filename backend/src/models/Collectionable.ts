import { Schema, model} from 'mongoose'

export interface Collectionable{
    name: string
    rarity: string
    about: string 
}

const collectionableSchema = new Schema<Collectionable>({
name: {type: String, required: true},
rarity: {type: String, required: true},
about: {type: String, required: true}

})

const CollectionableModel = model<Collectionable>('Collectionable', collectionableSchema)

export default CollectionableModel