import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GuaranteeSchema = new Schema({
    title: String,
    value: String,
});

const BarguaranteeSchema = new Schema({
    guarantee: GuaranteeSchema,
    price: GuaranteeSchema,
    professional: GuaranteeSchema,
});

const AdditionalInfoSectionSchema = new Schema({
    location: {
        title: String,
        description: String,
    },
    openinghours: {
        title: String,
        description: String,
    },
    estimateinfo: {
        title: String,
        description: String,
    },
});

const EstimateSectionSchema = new Schema({
    subtitle: String,
    title: String,
    gettingtouch: String,
    href: String,
    barguarantee: BarguaranteeSchema,
});

const InformationSectionSchema = new Schema({
    subtitle: String,
    title: String,
    description: String,
    subDescription: String,
});

const HeroSectionSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    commitments: [String],
});

const HeroHeaderSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,

});

const AboutSectionSchema = new Schema({
    hero: HeroSectionSchema,
    heroheader: HeroHeaderSchema,
    information: InformationSectionSchema,
    estimadetsection: EstimateSectionSchema,
    additionalinfo: AdditionalInfoSectionSchema,
},
{
    collection: 'aboutsections',

}
);

const aboutsections = mongoose.models.aboutsections || mongoose.model('aboutsections', AboutSectionSchema);

export default aboutsections;