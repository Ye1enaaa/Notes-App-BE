import Sequelize, { QueryTypes } from 'sequelize';
import sequelize from "@lib/database";
import { INote } from "@TStypes/note";

const Notes = sequelize.define<INote>('notes', {
    title:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    }
})


sequelize.query("SELECT 1 FROM `notes` LIMIT 1", { type: QueryTypes.SELECT })
    .then(() => {
        // Table exists, just sync
        return Notes.sync();
    })
    .catch(() => {
        // Table doesn't exist, sync and log
        return Notes.sync().then(() => console.log('Table Created!'));
    })
    .catch((err) => {
        console.log('Error', err)
    });

export default Notes;