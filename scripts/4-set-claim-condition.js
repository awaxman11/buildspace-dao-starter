import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xBbE0ce5aA81B14455085e627fFd7f23414573025",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        // Specify conditions.
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 17,
            maxQuantityPerTransaction: 1,
        });


        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()