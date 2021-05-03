module.exports = (sequelize, DataTypes) => {
    const Library = sequelize.define('Library', {
        title: DataTypes.STRING,
        type: DataTypes.STRING,
        itemImageUrl: DataTypes.STRING,
        youTubeVideoUrl: DataTypes.STRING,
        short_description: DataTypes.TEXT,
        url: DataTypes.STRING,
        source_name: DataTypes.STRING
    })

    return Library
}

