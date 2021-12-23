import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xBbE0ce5aA81B14455085e627fFd7f23414573025",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Vanilla Membership Pass",
                description: "This NFT will give you access to VanillaDAO!",
                image: readFileSync("scripts/assets/VanillaDAO_membership.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()