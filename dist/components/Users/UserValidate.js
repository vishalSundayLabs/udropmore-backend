"use strict";
/**
 * UserValidate.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const class_validator_1 = require("class-validator");
class Create {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)()
], Create.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)()
], Create.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)()
], Create.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], Create.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)()
], Create.prototype, "userType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "phone number should not be empty" })
], Create.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Create.prototype, "waId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], Create.prototype, "waToken", void 0);
exports.Create = Create;
