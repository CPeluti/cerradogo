import { Schema, model} from 'mongoose'

export interface Collection{
    name: string
    rarity: string
    about: string 
}

const collectionSchema = new Schema<Collection>({
name: {type: String, required: true},
rarity: {type: String, required: true},
about: {type: String, required: true}

})

const CollectionModel = model<Collection>('Collection', collectionSchema)

export default CollectionModel